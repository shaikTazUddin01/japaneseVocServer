import {v2 as cloudinary} from 'cloudinary'
import { config } from '.'


cloudinary.config({
    cloud_name:config.cloudinary_name,
    api_key:config.cloudinary_api,
    api_secret:config.cloudinary_secret
})

export const cloudinaryUpload=cloudinary