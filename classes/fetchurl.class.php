<?php

/**
 * Fetch URL Class
 */
class fetchUrl {

	private $url = "";

        /**
         * Set URL Property
         * @param string $url
         */
	public function setUrl($url) {
		$this->url = $url;
	}

        /**
         * Perform a fetch of URL and return output.
         * @return string $data
         */
	public function fetch() {

            $cURL = curl_init();
            curl_setopt($cURL, CURLOPT_URL, $this->url);
            curl_setopt($cURL, CURLOPT_HTTPGET, true);
            curl_setopt($cURL,CURLOPT_RETURNTRANSFER,1);
            curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, true);
	    $data = curl_exec($cURL);
            return $data;
	}

}
