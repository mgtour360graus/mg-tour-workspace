'use strict';
// Apenas dados sintéticos. Não depende de backups nem de imagens de clientes.
module.exports = function fixture() {
  const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jF9sAAAAASUVORK5CYII=';
  const brand = { name: 'Projeto de teste', signature: 'Dados sintéticos', color: '#123456', logo: '' };
  return {
    version: 1, brand, leads: [], briefings: [], catalog: [], street: [], personalSkins: [],
    proposal: { client: '', quantity: 5, unit: 0, services: 0, discount: 0, deposit: 50 },
    activeProjectId: 'test-project',
    projects: [{ id: 'test-project', name: 'Tour sintético', client: 'Cliente de teste', status: 'Rascunho',
      skin: 'faixa', layoutId: 'executive', transition: 'fade', floorplan: '', pins: [], brand: { ...brand },
      scenes: [
        { id: 'scene-one', name: 'Ambiente um', image, width: 2, height: 1, hotspots: [{ id: 'point-one', type: 'scene', label: 'Próximo', target: 'scene-two', yaw: 0, pitch: 0 }] },
        { id: 'scene-two', name: 'Ambiente dois', image, width: 2, height: 1, hotspots: [{ id: 'point-two', type: 'scene', label: 'Voltar', target: 'scene-one', yaw: 0, pitch: 0 }] }
      ]
    }]
  };
};
