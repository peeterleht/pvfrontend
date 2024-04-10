<template>
  <div class="container text-center">
    <div class="row mx-0">
      <div class="col mx-0 col-12">
        <FrontPageHeader/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Advert/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Feedback/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <PaymentTier/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ProjectExample/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <TryOut/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <FrontPageFooter/>
      </div>
    </div>
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