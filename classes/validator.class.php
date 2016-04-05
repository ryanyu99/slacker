<?php

class Validator {

        /**
         * Validates a URL
         * @param string $url
         * @return boolean $isValidated
         */
	public function url($url) {
		return filter_var($url, FILTER_VALIDATE_URL) && preg_match("/^http/i",$url);
	}

}
