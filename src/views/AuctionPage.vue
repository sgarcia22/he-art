<script lang="ts">
export default {
    name: "AuctionPage",
    props: {
        title: String,
        description: String,
        artists: Array,
        auctionTimeLeft: String,
    },

}
</script>
<template>
    <div class="flex justify-center grid grid-cols-3 grid-rows-1 p-20 content-center">
        <div class="card bg-[#15263F] w-80 h-[36rem] rounded-xl p-6 space-y-4">
            <a href="#">
                <img class="w-full h-64 rounded-md transition hover:bg-cyan-300"
                    src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="">
            </a>
            <div id="description" class="space-y-4">
                <a href="#">
                    <h2 class="text-white font-semibold text-xl transition hover:text-cyan-300">
                        Equilibrium #3429
                    </h2>
                </a>
                <p class="text-slate-500 text-sm select-none">Our Equilibrium collection promotes balance and calmness within the mind and soul.</p>
                <div class="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                    <span id="price" class="text-cyan-300 flex justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 320 512" fill="#67E7F9">
                            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                        </svg>
                        100 MATIC
                    </span>
                    <span class="text-slate-500 flex justify-between items-center select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        3 days left
                    </span>
                </div>
                <div class="flex text-sm items-center">
                    <img width="50" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cf2200d8-cc9e-4cb6-a262-891941053244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064528Z&X-Amz-Expires=86400&X-Amz-Signature=a5c6722b9a95cc953f762acbfabb6b2a8c9343e6f51676ef80a7261e37751295&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" alt="avatar" class="rounded-full border border-white">
                    <span class="ml-2 text-slate-500">
                        Creation of
                        <a href="#" class="text-gray-300 transition hover:text-cyan-300">
                            Julie
                        </a>
                    </span>
                </div>
                 <div class="flex text-sm items-center">
                    <img width="30" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc2e78b-d5f7-4e78-9278-2cd8f37ff362/123451661-portrait-of-man-wearing-grey-tshirt-as-casual-concept-closeup-isolated-on-white-background.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065149Z&X-Amz-Expires=86400&X-Amz-Signature=d26b4503c2eabf0ce6500c031b1172bded5c915a0099aec7fcfea35fc4d0fe57&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22123451661-portrait-of-man-wearing-grey-tshirt-as-casual-concept-closeup-isolated-on-white-background.webp%22&x-id=GetObject" alt="avatar" class="rounded-full border border-white">
                    <span class="ml-2 text-slate-500">
                        Creation of
                        <a href="#" class="text-gray-300 transition hover:text-cyan-300">
                            Leonard
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <div class="col-span-2 flex justify-center content-center">
            <div class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-8 mx-auto">
                    <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">NFT Auction For Good</h1>
                
                    <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                        A unique collaboration between a group of diverse and extremely talented artists. All proceeds will go towards mental health funds.
                    </p>
                    
                    <div class="py-10 flex justify-center">
                        <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                            <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Current Price $10</p>

                            <input placeholder="$0" class="w-1/4 text-center text-5xl font-bold text-gray-800 uppercase dark:text-gray-100"/>

                            <p class="font-medium text-gray-500 dark:text-gray-300">Enter a bid to help fund the future.</p>

                            <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#15263F] rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Place bid
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>