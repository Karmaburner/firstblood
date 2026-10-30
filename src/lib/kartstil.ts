// Mørk kartstil for First Blood, bygget på fargene fra Snazzy Maps-stilen
// «Assassin's Creed IV»: grågrønt land, lysere grågrønne veier, mørkt vann.
// Kartdata: OpenFreeMap (OpenMapTiles-skjema) og OpenStreetMap.
import type { StyleSpecification } from 'maplibre-gl'

const land = '#4d6059'
const vei = '#7f8d89'
const vann = '#2b3638'
const kant = '#1b2220'

const hovedveier = ['motorway', 'trunk', 'primary', 'secondary', 'tertiary']
const smaveier = ['minor', 'service', 'busway']

export const kartstil: StyleSpecification = {
  version: 8,
  glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
  sources: {
    openmaptiles: { type: 'vector', url: 'https://tiles.openfreemap.org/planet' },
  },
  layers: [
    { id: 'bakgrunn', type: 'background', paint: { 'background-color': land } },
    { id: 'park', type: 'fill', source: 'openmaptiles', 'source-layer': 'park', paint: { 'fill-color': '#485a53' } },
    { id: 'vann', type: 'fill', source: 'openmaptiles', 'source-layer': 'water', paint: { 'fill-color': vann } },
    { id: 'elv', type: 'line', source: 'openmaptiles', 'source-layer': 'waterway', paint: { 'line-color': vann, 'line-width': 2 } },
    {
      id: 'bygninger', type: 'fill', source: 'openmaptiles', 'source-layer': 'building', minzoom: 14,
      paint: { 'fill-color': '#43544e', 'fill-outline-color': kant },
    },
    {
      id: 'gangvei', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
      filter: ['in', ['get', 'class'], ['literal', ['path', 'pedestrian']]],
      paint: { 'line-color': vei, 'line-width': 1.2, 'line-dasharray': [2, 1.5], 'line-opacity': 0.8 },
    },
    {
      id: 'jernbane', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
      filter: ['==', ['get', 'class'], 'rail'],
      paint: { 'line-color': kant, 'line-width': 2, 'line-dasharray': [3, 2] },
    },
    {
      id: 'smavei-kant', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
      filter: ['in', ['get', 'class'], ['literal', smaveier]],
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': kant, 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 13, 2, 18, 16] },
    },
    {
      id: 'smavei', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
      filter: ['in', ['get', 'class'], ['literal', smaveier]],
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': vei, 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 13, 1, 18, 12] },
    },
    {
      id: 'hovedvei-kant', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
      filter: ['in', ['get', 'class'], ['literal', hovedveier]],
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': kant, 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 3, 18, 24] },
    },
    {
      id: 'hovedvei', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
      filter: ['in', ['get', 'class'], ['literal', hovedveier]],
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': '#9aa7a3', 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 1.5, 18, 18] },
    },
    {
      id: 'gatenavn', type: 'symbol', source: 'openmaptiles', 'source-layer': 'transportation_name', minzoom: 14,
      layout: {
        'symbol-placement': 'line',
        'text-field': ['coalesce', ['get', 'name:nonlatin'], ['get', 'name']],
        'text-font': ['Noto Sans Regular'],
        'text-size': ['interpolate', ['linear'], ['zoom'], 14, 12, 18, 15],
      },
      paint: { 'text-color': '#F0EBE0', 'text-halo-color': kant, 'text-halo-width': 1.5 },
    },
  ],
}
