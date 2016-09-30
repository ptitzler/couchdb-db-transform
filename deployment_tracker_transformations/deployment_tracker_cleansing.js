/*
 * Transformation function. See inline comments for details
 * @param {Object} doc - the source document
 * @returns {Object} - the transformed document
 */

module.exports = function(doc) {
	if(doc) {
		// if the value of property application_uris is not an array, cast it
		if((doc.application_uris) && (! Array.isArray(doc.application_uris))) {
         doc.application_uris = [doc.application_uris];
		}

		// remove the bound_vcap_services property; it can cause issues during the 
		// schema discovery process

		if(doc.bound_vcap_services) {
			delete doc.bound_vcap_services;
		}
	}
	return doc;
};