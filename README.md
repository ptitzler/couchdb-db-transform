# Customized couchdb-db-transform

Copies documents from one Cloudant database to another Cloudant database, applying a client-side filter and transformation routine to the documents.

For details about the service refer to https://github.com/ibm-cds-labs/couchdb-db-transform.


## Getting started

#### Clone the repository

```
$ git clone https://github.com/ptitzler/couchdb-db-transform.git
$ cd couchdb-db-transform
```

#### Customization (in `manifest.yml`)

The following customizations have been applied:
 * `CLIENT_FILTER` is pre-set to `sample_filter_functions/ignore_design_and_deleted_documents.js`
 * `TRANSFORM_FUNCTION` is pre-set to `deployment_tracker_transformations/deployment_tracker_cleansing.js`
 
 Edit `manifest.yml` to finalize the customization:
 
 * Set `SOURCE_COUCH_DB_URL` to the Deployment Tracker database URL
 * Set `TARGET_COUCH_DB_URL` to the staging database URL
 * Set `CONSOLE_USER` 
 * Set `CONSOLE_PASSWORD`

### Deploy the service in Bluemix

```
$ cf push 
```

### License 

Copyright 2016 IBM Cloud Data Services

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
