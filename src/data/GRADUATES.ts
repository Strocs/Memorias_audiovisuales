import type { Graduates } from '../types/graduates'

import { cristian_navarro_imgs, cristian_perez_imgs, diego_alvarado_imgs, maria_paulina_godoy_imgs } from './GALLERY'

export const GRADUATES: Graduates = [
	{
		name: 'Diego Alvarado',
		full_name: 'Diego Alvarado',
		project_name:
			'La Cotidianidad de la Tecnología y la Realidad Virtual en un Mundo Entre Pandemias',
		project_year: '2022',
		project_description:
			'El proyecto resulta contradictorio porque es una propuesta de lo que critica, intentando reunir y generando espacios de encuentro, mientras que a su vez reduce la interacción y desplazamiento en su interior suprimiendo los espacios de circulación, además de restringir el acceso a las que personas que estén contagiadas, esto debido a la nueva relación del espacio publico por el aumento del individualismo.',
		reel_id: 'mock4',
		video_id: '8yMzZwAtZRw',
		project_images: diego_alvarado_imgs,
	},
	{
		name: 'Cristián Navarro',
		full_name: 'Cristian Navarro Mondaca',
		project_name: "Albergue Oncológico 'El Faro y La Gruta'",
		project_year: '2023',
		project_description:
			'La obra de arquitectura del albergue se ha diseñado para visibilizar el cáncer. El volumen vertical del edificio se iluminará con los colores que representan a cada tipo de cáncer según la OMS. La curiosidad que genere este efecto visual se espera que lleve a las personas a buscar información en internet sobre el cáncer. Esta búsqueda podría vincularse a una página web que explique la importancia de la concientización sobre esta enfermedad.',
		reel_id: 'mock2',
		video_id: '8yMzZwAtZRw',
		project_images: cristian_navarro_imgs,
	},
	{
		name: 'María Paulina Godoy',
		full_name: 'María Paulina Godoy Alvarez',
		project_name:
			"Humedal El Culebrón 'Dispositivos Arquitectónicos para su Valorización, Preservación y Visualización'",
		project_year: '2021',
		project_description:
			'El Humedal El Culebrón es un ecosistema costero de gran importancia para la ciudad de Coquimbo, pero se encuentra amenazado por el crecimiento urbano, la contaminación y la falta de protección oficial. \n Como proyecto se propone conservar el humedal, con un plan integral que incluye las siguientes estrategias: Integrar el humedal al entorno urbano, creando corredores verdes y espacios públicos que permitan una transición gradual entre la ciudad y la naturaleza. Mejorar la estética del humedal, para convertirlo en un atractivo turístico y cultural. \n La conservación del Humedal El Culebrón es una tarea urgente, ya que este ecosistema brinda importantes beneficios a la ciudad, como la regulación del clima, la purificación del agua y el control de inundaciones.',
		reel_id: 'mock3',
		video_id: '8yMzZwAtZRw',
		project_images: maria_paulina_godoy_imgs,
	},
	{
		name: 'Cristián Perez',
		full_name: 'Cristián Perez Vásquez',
		project_name: 'Museo Regional de la Memoria ',
		project_year: '2021',
		project_description:
			'La propuesta pretende narrar y comprender un hecho, establecer un espacio para la memoria, de reflexión y síntesis frente a lo ocurrido. De esta forma, activar los sentidos, convertir una memoria individual en una memoria colectiva. Un espacio que, ademas de honrar a aquellas personas que fueron victimas de las violaciones a los derechos humanos y a sus familias que no han descasado por mas de 40 años buscando justicia y verdad, sea capaz de trasladar al visitante por un instante al lugar del otro (victima y familiar), haciéndolo parte de la ausencia, pero también de la reparación de la memoria.',
		reel_id: 'rcpmrdlm',
		video_id: '7fnB7G7cKTM',
		project_images: cristian_perez_imgs,
	}
]
