```Update your global.js file
## find onVariantChange()
 -- Add below line of code just above
"if(!this.currentVariant)"
this.filterImgVariant();

-- Add below function definination after the onVariantChange() function
 defination:
```
filterImgVariant() {
  if(this.currentVariant.featured_media && this.currentVariant.featured_media.alt) {
      document.querySelectorAll('[thumbnail-alt]').forEach(img => img.style.display = 'none')
      const currentImgAlt = this.currentVariant.featured_media.alt
      const thumbnailSelector = `[thumbnail-alt = '${currentImgAlt}']`
      document.querySelectorAll(thumbnailSelector).forEach(img => img.style.display = 'block')
  } else {
      document.querySelectorAll('[thumbnail-alt]').forEach(img => img.style.display = 'block')
  }
} 

