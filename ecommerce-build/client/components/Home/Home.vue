<template lang="html">
  <section class="float">
    <h1>Welcome to my shop faggot</h1>
    <recently-joined />
	</section>
</template>

<script>
/*
 * LIBS
 */
import Vue                                    from "Vue";
import { mapActions, mapGetters, mapState }   from "vuex";

/*
 * Components
 */
import RecentlyJoined                        from "../Account/RecentlyJoined.vue";

export default {
  components : {
    "recently-joined": RecentlyJoined
  }
}
</script>

<style lang="css">

	.float {
		float: left;
	}

</style>
