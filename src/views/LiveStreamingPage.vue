<script lang="ts">
import Chat from "@/components/Live/Chat.vue";
import Profile from "@/components/Live/Profile.vue";
import Header from '@/components/Header.vue';
export default {
    components:
    { Chat, Profile, Header},
}
</script>
<template>
    <div>
        <Header/>
    </div>
    <div class="flex justify-center content-center">
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-3 col-span-2 p-8 ">
                <iframe width="700" height="390" class="col-span-2 row-span-2" src="https://www.youtube.com/embed/gG7eClyRXTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Profile class="py-6" />
            </div>
            <Chat/>
        </div>
    </div>
</template>