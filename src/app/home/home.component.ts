import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private map: L.Map | undefined;
  private desks: L.LayerGroup = L.layerGroup();
  private selectedDesk: L.Marker | null = null;

  ngOnInit(): void {
    this.initMap();
    this.initOverlayMenu();
  }

  private initMap(): void {
    this.map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -1,
      maxZoom: 4,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      dragging: true
    });

    const bounds = [[0, 0], [500, 500]];
    L.imageOverlay('assets/images/floorplan.png', bounds as any).addTo(this.map);
    this.map.fitBounds(bounds as any);

    this.loadDesksFromLocalStorage();
  }

  private addDesk(position: L.LatLngExpression): void {
    const deskIcon = this.createDeskIcon(false);

    const marker = L.marker(position, {
      icon: deskIcon,
      draggable: true
    });
    this.map.on('click', () => this.selectDesk(null))
    marker.on('click', () => this.selectDesk(marker));
    marker.on('dragend', () => this.saveDesksToLocalStorage());

    marker.addTo(this.desks);
    this.desks.addTo(this.map);
    this.saveDesksToLocalStorage();
  }

  private deleteDesk(): void {
    if (this.selectedDesk) {
      this.desks.removeLayer(this.selectedDesk);
      this.selectedDesk = null;
      this.saveDesksToLocalStorage();
    }
  }

  private createDeskIcon(isSelected: boolean): L.DivIcon {
    const borderStyle = isSelected ? 'dashed' : 'none';
    return L.divIcon({
      className: 'desk-icon',
      iconSize: [50, 50],
      html: `<img src="assets/images/4seat.PNG" style="width: 50px; height: 50px; border: 2px ${borderStyle} black;" />`
    });
  }

  private selectDesk(marker: L.Marker): void {

    if (this.selectedDesk) {
      this.selectedDesk.setIcon(this.createDeskIcon(false)); // Deselect the currently selected desk
    }

    if (!marker) {
      return;
    }
    
    this.selectedDesk = marker;
    marker.setIcon(this.createDeskIcon(true)); // Highlight the newly selected desk
  }

  private initOverlayMenu(): void {
    const customControl = L.Control.extend({
      options: {
        position: 'topright'
      },
      onAdd: (map: L.Map) => {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

        container.style.backgroundColor = 'white';
        container.style.width = '150px';
        container.style.height = 'auto';
        container.style.padding = '10px';

        const addButton = L.DomUtil.create('button', '', container);
        addButton.innerHTML = 'Add Desk';
        addButton.style.display = 'block';
        addButton.style.marginBottom = '10px';
        addButton.onclick = () => this.addDesk([Math.random() * 500, Math.random() * 500]);

        const deleteButton = L.DomUtil.create('button', '', container);
        deleteButton.innerHTML = 'Delete Desk';
        deleteButton.style.display = 'block';
        deleteButton.onclick = () => this.deleteDesk();

        L.DomEvent.disableClickPropagation(container);
        return container;
      }
    });

    this.map?.addControl(new customControl());
  }

  private saveDesksToLocalStorage(): void {
    const deskPositions = this.desks.getLayers().map((layer: any) => layer.getLatLng());
    localStorage.setItem('desks', JSON.stringify(deskPositions));
  }

  private loadDesksFromLocalStorage(): void {
    const savedDesks = localStorage.getItem('desks');
    if (savedDesks) {
      const deskPositions = JSON.parse(savedDesks);
      deskPositions.forEach((position: L.LatLngExpression) => this.addDesk(position));
    }
  }
}
