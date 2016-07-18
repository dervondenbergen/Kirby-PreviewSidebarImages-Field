# Previews for Sidebar Images

This custom field enables (very basic) previews for images in the sidebar.

## Installation

Clone or download the contents of this repo to `/site/fields/previewImagesFromSidebar`.

Or, install it as a git submodule: `git submodule add https://github.com/dervondenbergen/Kirby-PreviewSidebarImages-Field site/fields/previewImagesFromSidebar`

## Usage

To get previews for a blueprint page, add the custom field of type `previewImagesFromSidebar` to the according blueprint:

```
fields:
  previewImagesFromSidebar:
    type: previewImagesFromSidebar
```
