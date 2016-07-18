<?php

class PreviewImagesFromSidebarField extends BaseField {

    public static $assets = array(
        'css' => array(
            'preview-on-hover.css'
        ),
        'js' => array(
            'preview-on-hover.js'
        )
    );

    public function element() {
        $element = parent::element();

        $script = new Brick('script', false);
        $script->append('previewImagesFromSidebar()');

        $element->append($script);
        return $element;
    }

}
