<template>
  <div class="row">
    <FrontPageHeader/>
  </div>
  <div class="row">
    <Advert/>
  </div>
  <div class="row">
    <Feedback/>
  </div>
  <div class="row">
    <PaymentTier/>
  </div>
  <div class="row">
    <ProjectExample/>
  </div>
  <div class="row">
    <TryOut/>
  </div>
  <div class="row">
    <FrontPageFooter/>
  </div>
</template>
<script setup>
import FrontPageHeader from "@/components/FrontPageHeader.vue";
import Advert from "@/components/Advert.vue";
import Feedback from "@/components/Feedback.vue";
import PaymentTier from "@/components/PaymentTier.vue";
import ProjectExample from "@/components/ProjectExample.vue";
import TryOut from "@/components/TryOut.vue";
import FrontPageFooter from "@/components/FrontPageFooter.vue";
</script>