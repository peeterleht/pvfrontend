<template>
  <div class="container text-center">
    <div class="row mx-0">
      <div class="col mx-0 col-12">
        <FrontPageHeader @event-scroll-to-ref="scrollToRef"/>
      </div>
    </div>
    <div class="row" ref="advertRef">
      <div class="col">
        <Advert/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Feedback/>
      </div>
    </div>
    <div class="row" ref="paymentTierRef">
      <div class="col">
        <PaymentTier/>
      </div>
    </div>
    <div class="row" ref="projectExampleRef">
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



<script>
import FrontPageHeader from "@/components/frontpage/FrontPageHeader.vue";
import Advert from "@/components/frontpage/Advert.vue";
import Feedback from "@/components/frontpage/Feedback.vue";
import PaymentTier from "@/components/frontpage/PaymentTier.vue";
import ProjectExample from "@/components/frontpage/ProjectExample.vue";
import TryOut from "@/components/frontpage/TryOut.vue";
import FrontPageFooter from "@/components/frontpage/FrontPageFooter.vue";

export default {
  name: 'FrontPageView',
  components: {FrontPageFooter, TryOut, ProjectExample, PaymentTier, Feedback, Advert, FrontPageHeader},
  data() {
    return {
    }
  },
  methods: {
    scrollToRef(scrollToRef) {
      this.$refs[scrollToRef].scrollIntoView({ behavior: 'smooth' })
    }
  }
}


</script>