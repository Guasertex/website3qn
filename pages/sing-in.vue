<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
};
</script>
<template>
  <q-page
    class="row justify-center items-center fxed animatedGradient"
    
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width: 300px; height: 485px">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md text-center">Sign in</h4>
            <div
              class="absolute-bottom-right q-pr-md"
              style="transform: translateY(50%)"
            >
              <q-btn fab icon="close" color="purple-4" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input
                square
                clearable
                v-model="email"
                type="email"
                label="Email"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="username"
                type="username"
                label="Username"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="password"
                type="password"
                label="Password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="purple-4"
              class="full-width text-white"
              label="Get Started"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <NuxtLink to="/login" class="no-underline">
              <p class="text-grey-6">Return to login</p>
            </NuxtLink>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<style lang="scss" scoped>
.animatedGradient {
	background: linear-gradient(-45deg, #ed193b,#FFED5E, #583453, #4a40d6);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
}
 
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>