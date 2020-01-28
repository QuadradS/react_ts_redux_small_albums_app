// Fake api ----------------------
const fakeAlbums: AlbumResponseDTO[] = [
  {
    id: '000dcy7dc',
    albumPreview: 'http://static.hdw.eweb4.com/media/thumbs/1/126/1258249.jpg',
    name: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    countPhoto: 20,
    createdTime: new Date()
  },
  {
    id: '003dcy7dc',
    albumPreview: 'http://celebrity-foto.info/wp-content/uploads/2019/01/Mila-Kunis-4-200x300.jpg',
    name: 'Home album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    countPhoto: 15,
    createdTime: new Date()
  },
  {
    id: '000dcy7ac',
    albumPreview: 'https://banana.by/uploads/posts/2011-01/thumbs/1294222848_mila-kunis-2.jpg',
    name: 'Rest album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    countPhoto: 10,
    createdTime: new Date()
  }
]
const fakeAlbumsPhotos: AlbumPhotoResponseDTO[] = [
  {
    id: 'qw124142',
    filename: 'test file name',
    albumID: '000dcy7dc',
    albumPreview: 'http://static.hdw.eweb4.com/media/thumbs/1/126/1258249.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://i.pinimg.com/736x/8e/7f/b1/8e7fb160516f6e8468af7b93cb03e24f.jpg',
    createdTime: new Date()
  }, {
    id: 'qw124143',
    filename: 'test file name',
    albumID: '000dcy7dc',
    albumPreview: 'http://static.hdw.eweb4.com/media/thumbs/1/126/1258249.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://otvet.imgsmail.ru/download/198119019_87cd28ca4e356994e0d9eb9917acd078_800.jpg',
    createdTime: new Date()
  }, {
    id: 'qw124144',
    filename: 'test file name',
    albumID: '000dcy7dc',
    albumPreview: 'http://static.hdw.eweb4.com/media/thumbs/1/126/1258249.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://i.pinimg.com/736x/37/a8/da/37a8da53e400d10fab6a65e0b5ceaf75.jpg',
    createdTime: new Date()
  }, {
    id: 'qw124145',
    filename: 'test file name',
    albumID: '000dcy7dc',
    albumPreview: 'http://static.hdw.eweb4.com/media/thumbs/1/126/1258249.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://pp.userapi.com/c11032/u7508266/-6/x_6ed83d3c.jpg',
    createdTime: new Date()
  }, {
    id: 'qw124146',
    filename: 'test file name',
    albumID: '000dcy7dc',
    albumPreview: 'http://static.hdw.eweb4.com/media/thumbs/1/126/1258249.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://www.startfilm.ru/images/base/person/21_11_11/99982_030.jpg',
    createdTime: new Date()
  },

  /// ---

  {
    id: 'qw124142',
    filename: 'test file name',
    albumID: '003dcy7dc',
    albumPreview: 'http://celebrity-foto.info/wp-content/uploads/2019/01/Mila-Kunis-4-200x300.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://i.ytimg.com/vi/9Wqr7LyVBsg/hqdefault.jpg',
    createdTime: new Date()
  }, {
    id: 'qw1243',
    filename: 'test file name',
    albumID: '003dcy7dc',
    albumPreview: 'http://celebrity-foto.info/wp-content/uploads/2019/01/Mila-Kunis-4-200x300.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://zdavnews.ru/wp-content/uploads/2018/11/8d50fe1c3b389e70e4246af7440b022b.jpg',
    createdTime: new Date()
  }, {
    id: 'qw124144',
    filename: 'test file name',
    albumID: '003dcy7dc',
    albumPreview: 'http://celebrity-foto.info/wp-content/uploads/2019/01/Mila-Kunis-4-200x300.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://i.pinimg.com/736x/d3/78/1d/d3781d2250f8cdf1abad97e8959dcfa3--th-birthday-mila-kunis.jpg',
    createdTime: new Date()
  }, {
    id: 'qw124145',
    filename: 'test file name',
    albumID: '003dcy7dc',
    albumPreview: 'http://celebrity-foto.info/wp-content/uploads/2019/01/Mila-Kunis-4-200x300.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://static1.purepeople.com/articles/6/98/88/6/@/830471-mila-kunis-opengraph_1200-1.jpg',
    createdTime: new Date()
  }, {
    id: 'qw124146',
    filename: 'test file name',
    albumID: '003dcy7dc',
    albumPreview: 'http://celebrity-foto.info/wp-content/uploads/2019/01/Mila-Kunis-4-200x300.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://i1.prth.gr/images/640x360share/files/2016/11/02/mila-kunis.jpg',
    createdTime: new Date()
  },

  /// ---

  {
    id: 'q124142',
    filename: 'test file name',
    albumID: '000dcy7ac',
    albumPreview: 'https://banana.by/uploads/posts/2011-01/thumbs/1294222848_mila-kunis-2.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://icdn.ensonhaber.com/resimler/galeri/2_11093.jpg',
    createdTime: new Date()
  }, {
    id: 'q124143',
    filename: 'test file name',
    albumID: '000dcy7ac',
    albumPreview: 'https://banana.by/uploads/posts/2011-01/thumbs/1294222848_mila-kunis-2.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://f.vividscreen.info/soft/7ec8ee2c5f97a2c5b37974bc48de4e1a/Talented-actress-Mila-Kunis-640x480.jpg',
    createdTime: new Date()
  }, {
    id: 'q124144',
    filename: 'test file name',
    albumID: '000dcy7ac',
    albumPreview: 'https://banana.by/uploads/posts/2011-01/thumbs/1294222848_mila-kunis-2.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'https://cdn.pravda.ru/eng/image/photo/4/2/5/68425.jpeg',
    createdTime: new Date()
  }, {
    id: 'q124145',
    filename: 'test file name',
    albumID: '000dcy7ac',
    albumPreview: 'https://banana.by/uploads/posts/2011-01/thumbs/1294222848_mila-kunis-2.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    keywords: 'test1 test2 test3',
    url: 'http://stylesstar.com/wp-content/uploads/2019/03/mila-kunis-hairstyles-and-best-beauty-looks_7.jpg',
    createdTime: new Date()
  }, {
    id: 'q124146',
    filename: 'test file name',
    albumID: '000dcy7ac',
    albumPreview: 'https://banana.by/uploads/posts/2011-01/thumbs/1294222848_mila-kunis-2.jpg',
    albumName: 'Init album',
    ownerID: '456',
    ownerName: 'Mila Kunis',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque corporis eaque eos est
        exercitationem mollitia nihil odio quaerat quibusdam quod rem repellat rerum, tenetur unde ut veniam vitae!`,
    url: 'https://i.pinimg.com/originals/fe/a2/2e/fea22ebed36e00fa886a4789456e807c.jpg',
    keywords: 'test1 test2 test3',
    createdTime: new Date()
  }
]

export interface AlbumResponseDTO {
  id: string
  albumPreview: string
  name: string
  ownerID: string
  ownerName: string
  countPhoto: number
  createdTime: Date
}

export interface AlbumPhotoResponseDTO {
  id: string
  filename:  string
  albumID: string
  albumPreview: string
  albumName: string
  ownerID: string
  ownerName: string
  description: string
  keywords: string
  url: string
  createdTime: Date
}

export const getAllAlbums = (): Promise<AlbumResponseDTO[]> =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(fakeAlbums)
    }, 1500)
  })

export const getAlbumPhotos = (albumID: string): Promise<AlbumPhotoResponseDTO[]> =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(fakeAlbumsPhotos.filter((a: AlbumPhotoResponseDTO) => a.albumID === albumID))
    }, 500)
  })

export const getPhoto = (photoID: string): Promise<AlbumPhotoResponseDTO> =>
  new Promise((res, rej) => {
    setTimeout(() => {

      if (fakeAlbumsPhotos.find((a: AlbumPhotoResponseDTO) => a.id === photoID)) {
        res(fakeAlbumsPhotos.find((a: AlbumPhotoResponseDTO) => a.id === photoID))
      } else {
        rej('Not founded')
      }
    }, 500)
  })
