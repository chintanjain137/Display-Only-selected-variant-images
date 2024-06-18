# Display-Only-selected-variant-images
Display Only selected variant images - DAWN theme Shopify 

## 1. Update Alt text of Images in Gallery for each product.
## 2. Go to snippets -> product-media-gallery.liquid
-- find 'product__media-item'class in ```li``` tag which is inside product.media loop
Paste the below code inside the ```li``` open tag

```
{% if product.selected_or_first_available_variant.featured_media.alt != media.alt and product.selected_or_first_available_variant.featured_media.alt != blank %}
Style= "display: none;"
{% endif %}
thumbnail-alt='{{media.alt}}'
```
