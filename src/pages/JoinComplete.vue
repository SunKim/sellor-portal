<template>
  <div class="container">
    {{ params }}
  </div>
</template>

<script>
export default {
  name: 'JoinComplete',
  // Options / Data
  // data () { return {} },
  // props: [],
  // propsData: {},
  computed: {
    params: function () {
      return this.$route.params
    }
  },
  // methods: {},
  // watch: {},
  // Options / DOM
  // el () {},
  // template: '',
  // render () {},
  // Options / Lifecycle Hooks
  // beforeCreate () {},
  // created () {},
  // beforeMount () {},
  mounted () {
    console.log(this.params)
  }
  // beforeUpdate () {},
  // updated () {},
  // activated () {},
  // deactivated () {},
  // beforeDestroy () {},
  // destroyed () {},
  // Options / Assets
  // directives: {},
  // filters: {},
  // components: {},
  // Options / Misc
  // parent: null,
  // mixins: [],
  // name: '',
  // extends: {},
  // delimiters: [ '{{', '}}' ],
  // functional: false
}
</script>
