export declare var yandex: any;
export interface YandexMap extends MVCObject {
    constructor(el: HTMLElement, opts?: MapOptions): void;
    geoObjects: any;
    setCenter(param: any[]): void;
    getCenter(): any;
    events: any;
}
export interface LatLng {
    constructor(lat: number, lng: number): void;
    lat(): number;
    lng(): number;
}
export interface Marker extends MVCObject {
    constructor(): void;
    setMap(map: YandexMap): void;
    setPosition(latLng: LatLng | LatLngLiteral): void;
    events: any;
    balloon: any;
    layoutBalloon: any;
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
    draggable: boolean;
}
export interface Claster {
    constructor(): void;
}
export interface MarkerClaster {
    lat: number;
    lng: number;
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
    type: string;
}
export interface LatLngLiteral {
    lat: number;
    lng: number;
}
export interface MVCObject {
    addListener(eventName: string, handler: Function): MapsEventListener;
}
export interface MapsEventListener {
    remove(): void;
}
export interface MouseEvent {
    latLng: LatLng;
    get: any;
}
export interface MapClickMouseEvent {
    lat: number;
    lng: number;
}
export interface MapMouseEvent {
    lat: number;
    lng: number;
    nativeMarker: any;
}
export interface MapOptions {
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    center?: any;
    type: any;
    controls?: any[];
}
export interface ObjectManager {
    clusterize: boolean;
    objects: any[];
}
