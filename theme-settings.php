<?php

$form['front_end_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Front End Address'),
    '#default_value' => theme_get_setting('front_end_url'),
    '#description' => t('Address of front end.')
);
