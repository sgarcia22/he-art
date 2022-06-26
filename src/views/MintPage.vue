<script lang="ts">
// import { upload } from '../utils/file_upload.js';
import { upload } from '../utils/file_upload_fake.js';
import { mintTatum } from '../utils/mint.js';

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
name: 'app',
data() {
    return {
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos',
        metadataName: '',
        metadataDescription: '',
    }
},
computed: {
    isInitial() {
    return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
    return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
    return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
    return this.currentStatus === STATUS_FAILED;
    }
},
methods: {
    reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
    },
    save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;

        upload(formData)
            .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
            })
            .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
            });
    },
    async mint() {
        await mintTatum(this.name, this.description, this.uploadedFiles[0]);
    },
    filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
            .from(Array(fileList.length).keys())
            .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
            });

        // save it
        this.save(formData);
    }
    },
    mounted() {
        this.reset();
    },
}

// export default {
//     name: "MintPage",
//     props: {
//         title: String,
//         description: String,
//         artists: Array,
//         auctionTimeLeft: String,
//     }
// }
</script>
<template>
<div class="flex justify-center p-8">
<div id="app">
    <div class="container">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Upload Completed Piece Here</h1>
                
        <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            This will mint the artwork as an NFT, non-fungible token, on the blockchain.
        </p>


    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
        
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Name</label>
                    <input v-model="name" id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
                <div></div>

                <!-- <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                    <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div> -->

                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="password">Description</label>
                    <input v-model="description" id="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
            </div>
        </form>

                       
      <!--UPLOAD-->
        <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving" class="pt-8">
            <h1>Upload images</h1>
            <div class="dropbox">
            <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                accept="image/*" class="input-file">
                <p v-if="isInitial">
                Drag your file(s) here to begin<br> or click to browse
                </p>
                <p v-if="isSaving">
                Uploading {{ fileCount }} files...
                </p>
            </div>
        </form>
        <!--SUCCESS-->
        <div v-if="isSuccess">
            <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
            <p>
            <a href="javascript:void(0)" @click="reset()">Upload again</a>
            </p>
            <ul class="list-unstyled">
            <li v-for="item in uploadedFiles">
                <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
            </li>
            </ul>
        </div>
        <!--FAILED-->
        <div v-if="isFailed">
            <h2>Uploaded failed.</h2>
            <p>
            <a href="javascript:void(0)" @click="reset()">Try again</a>
            </p>
            <pre>{{ uploadError }}</pre>
        </div>

        <!-- SUBMIT -->

        <div class="flex justify-end mt-6">
            <button  type="button" @click="mint()" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Mint</button>
        </div>
    </section>
    </div>
  </div>
</div>
</template>
<style>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>