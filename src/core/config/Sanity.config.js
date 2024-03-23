import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: '93r8m260',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2022-03-07',
})


const builder = imageUrlBuilder(sanityClient)
export const sanityImageBuilder = (imageUrl) => {
  return builder.image(imageUrl)
}