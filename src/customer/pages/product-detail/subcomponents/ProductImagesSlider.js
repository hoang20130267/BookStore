import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

const productImages = [
    {
        original: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935325011559.jpg',
        thumbnail: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935325011559.jpg',
    },
    {
        original: 'https://cdn0.fahasa.com/media/catalog/product/_/m/_m_tr_i_d_ng_en_b_a_tr_c.png',
        thumbnail: 'https://cdn0.fahasa.com/media/catalog/product/_/m/_m_tr_i_d_ng_en_b_a_tr_c.png',
    },
    {
        original: 'https://cdn0.fahasa.com/media/catalog/product/_/m/_m_tr_i_d_ng_en_b_a_sau.png',
        thumbnail: 'https://cdn0.fahasa.com/media/catalog/product/_/m/_m_tr_i_d_ng_en_b_a_sau.png',
    }
]
const ProductImagesSlider = (props) => {

    return (
        <ImageGallery showPlayButton={false}
                      // autoPlay={true}
                      showNav={false}
                      items={productImages}/>
    );
}
export default ProductImagesSlider;