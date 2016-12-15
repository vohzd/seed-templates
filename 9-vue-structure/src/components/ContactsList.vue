<template lang="html">
  <section class="">
  	<h4>
		<i class="fa fa-address-card" aria-hidden="true"></i>
		Contacts List
	</h4>

	<div class="contact-list" v-for="contact in contacts">
		<i class="fa fa-user" aria-hidden="true"></i>
		<span>{{ contact.name }}</span>
	</div>

	<form class="">
		<input type="text" name="contact-name" placeholder="Add new contact" />
		<button name="button">
			<i class="fa fa-plus" aria-hidden="true"></i>
			Add Contact
		</button>
	</form>

	</section>
</template>

<script>

import { mapGetters } from "vuex";

export default {

	computed: {
		...mapGetters([
			"contacts"
		])
	}

}
</script>

<style lang="css">
</style>
