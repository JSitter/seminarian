<?php
/**
 * Overrides user functions
 */
function seminarian_theme() {
    $items = array();

    $items['user_login'] = array(
        'render element' => 'form',
        'path' => drupal_get_path('theme', 'seminarian') . '/templates',
        'template' => 'user-login',
        'preprocess functions' => array(
           'seminarian_preprocess_user_login'
        ),
      );
      $items['user_register_form'] = array(
        'render element' => 'form',
        'path' => drupal_get_path('theme', 'seminarian') . '/templates',
        'template' => 'user-register-form',
        'preprocess functions' => array(
          'seminarian_preprocess_user_register_form'
        ),
      );
      $items['user_pass'] = array(
        'render element' => 'form',
        'path' => drupal_get_path('theme', 'seminarian') . '/templates',
        'template' => 'user-pass',
        'preprocess functions' => array(
          'seminarian_preprocess_user_pass'
        ),
      );
      return $items;
}

function seminarian_preprocess_user_login(&$vars) {
    $vars['intro_text'] = t('This is my awesome login form');
  }
  
function seminarian_preprocess_user_register_form(&$vars) {
    $vars['intro_text'] = t('This is my super awesome reg form');
}

function seminarian_preprocess_user_pass(&$vars) {
    $vars['intro_text'] = t('This is my super awesome request new password form');
}
