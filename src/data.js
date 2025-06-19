export const marcas = [
  { id: 1, nombre: 'Apple' },
  { id: 2, nombre: 'Samsung' },
  { id: 3, nombre: 'Xiaomi' },
  { id: 4, nombre: 'Motorola' }
];

export const celulares = [
  {
    id: 1,
    nombre: 'iPhone 14 Pro',
    descripcion: 'Pantalla Super Retina XDR, chip A16 Bionic, cámara de 48 MP',
    precio: 'USD '+1299,
    marcaId: 1,
    fotos: [
     ' https://tienda.personal.com.ar/images/720/webp/i_Phone_14_Pro_Space_Black_24f68f6568.png',
     'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111846_sp875-sp876-iphone14-pro-promax.png'
    ]
  },
  {
    id: 2,
    nombre: 'Samsung Galaxy S23',
    descripcion: 'Pantalla AMOLED 6.1", Snapdragon 8 Gen 2, cámara triple',
    precio: 'USD '+999,
    marcaId: 2,
    fotos: [
     ' https://d22fxaf9t8d39k.cloudfront.net/43ba54e5bcd389276ac7ed1262c2f96aed5d3f55a78ba410e58f7362acb1c53b155135.jpg',
     'https://multipoint.com.ar/Image/0/750_750-[global-version]-sm-s918_galaxys23ultra_front_phantomblack_221122.jpg'
    ]
  },
  {
    id: 3,
    nombre: 'Xiaomi 13 Pro',
    descripcion: 'Pantalla AMOLED 6.73", cámara Leica, carga rápida 120W',
    precio: 'USD '+899,
    marcaId: 3,
    fotos: [
      'https://acdn-us.mitiendanube.com/stores/001/531/943/products/hfb1ad0da81454274ab223ac1f1f862e3o_jpg_960x960_jpg_934d5a6c-421c-4bd8-b7d9-83365b916809_500x-99a1b5bb3805ac4e7916980778566513-1024-1024.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRien7azXbQcz0x9Tk1XoGBhTSFd5JQGYP-WQ&s'
    ]
  },
  {
    id: 4,
    nombre: 'Motorola Edge 40',
    descripcion: 'Pantalla pOLED, MediaTek Dimensity 8020, resistente al agua',
    precio: 'USD '+699,
    marcaId: 4,
    fotos: [
      'https://s1.elespanol.com/2023/04/04/elandroidelibre/moviles-android/753684775_232185427_1706x960.jpg',
      'https://www.clarin.com/img/2023/05/18/AcuxQ1-zC_720x0__1.jpg'
    ]
  }
];
