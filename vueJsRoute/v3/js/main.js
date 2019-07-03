


let vfor = new Vue({
    // use $element for has same syntax then vuejs
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    },
    firstName: 'John',
    lastName: 'Doe',
    seconds: 0
  },
  watch: {
      fullname: function(value) {
          console.log('watch', value);
      }
  },
  computed: {
      fullname: {
          get: function() {
              return this.firstName + ' ' + this.lastName
          },
          set: function (value) {
              let parts = value.split(' ');
              this.firstName = parts[0];
              this.lastName = parts[0];
          }
      }
  },
  methods: {}, // call on each change!
  mounted: function(){
        this.$interval = setInterval( () => {
            this.seconds ++;
        }, 1000);
  },
  destroyed: function(){
      clearInterval(this.$interval);
  }
});