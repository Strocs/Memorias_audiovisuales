import { getPhotos } from "@utils/getPhotos"

export const cristian_navarro_imgs = await getPhotos(import.meta.glob('../assets/cristian-navarro/*'))
export const cristian_perez_imgs = await getPhotos(import.meta.glob('../assets/cristian-perez/*'))
export const diego_alvarado_imgs = await getPhotos(import.meta.glob('../assets/diego-alvarado/*'))
export const maria_paulina_godoy_imgs = await getPhotos(import.meta.glob('../assets/maria-paulina-godoy/*'))