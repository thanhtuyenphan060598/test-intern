<template>
  <div id="app">
    <div id="wrapper">
      <form class="contact-form" @submit.prevent="checkRequired">
        <div class="contact-form__title">
          <h3>Liên hệ</h3>
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputName" class="contact-form__label">Họ Tên</label>
          <input
            @blur="rules.requiredName = !obj.name ? true : false"
            v-model="obj.name"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': rules.requiredName }"
            id="exampleInputName"
            placeholder="Họ Tên"
          />
          <span v-if="rules.requiredName" :class="{ 'invalid-feedback': rules.requiredName }"
            >Vui lòng nhập họ tên</span
          >
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputEmail" class="contact-form__label">Email</label>
          <input
            @blur="rules.requiredEmail = !obj.email ? true : false"
            v-model="obj.email"
            type="email"
            class="form-control"
            id="exampleInputEmail"
            placeholder="Email"
            :class="{ 'is-invalid': rules.requiredEmail }"
          />
          <span v-if="rules.requiredEmail" :class="{ 'invalid-feedback': rules.requiredEmail }"
            >Bắt buộc phải có Email</span
          >
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPhone" class="contact-form__label">Số điện thoại</label>
          <input
            @blur="rules.requiredPhone = !obj.phone ? true : false"
            v-model="obj.phone"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': rules.requiredPhone }"
            id="exampleInputPhone"
            placeholder="Số điện thoại"
          />
          <span v-if="rules.requiredPhone" :class="{ 'invalid-feedback': rules.requiredPhone }"
            >Vui lòng nhập số điện thoại</span
          >
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputContentContact" class="contact-form__label">Nội dung liên lạc</label>
          <input
            @blur="rules.requiredContentContact = !obj.contentContact ? true : false"
            v-model="obj.contentContact"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': rules.requiredContentContact }"
            id="exampleInputContentContact"
            placeholder="Nội dung liên lạc"
          />
          <span v-if="rules.requiredContentContact" :class="{ 'invalid-feedback': rules.requiredContentContact }"
            >Vui lòng nhập số nội dung liên lạc</span
          >
        </div>
        <div class="contact-form__button d-flex w-100">
          <button type="submit" class="btn btn-primary mt-4 w-">Submit</button>
          <button type="submit" class="btn btn-primary mt-4" @click="clearForm">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rules: {
        requiredName: false,
        requiredEmail: false,
        requiredPhone: false,
        requiredContentContact: false,
      },
      obj: {
        name: null,
        email: null,
        phone: null,
        contentContact: null,
      },
    }),
    methods: {
      clearForm() {
        this.obj = {
          name: null,
          email: null,
          phone: null,
          contentContact: null,
        };
      },
      checkRequired() {
        if (!this.obj.name) {
          this.rules.requiredName = true;
        }
        if (!this.obj.email) {
          this.rules.requiredEmail = true;
        }
        if (!this.obj.phone) {
          this.rules.requiredPhone = true;
        }
        if (!this.obj.contentContact) {
          this.rules.requiredContentContact = true;
        } else {
          this.axios
            .post('/users', this.obj, {
              headers: {
                Accept: 'application/json',
              },
            })
            .then(() => {
              this.$alert('', 'Thành Công', 'success');
              this.obj = {
                name: null,
                email: null,
                phone: null,
                contentContact: null,
              };
            });
        }
      },
    },
  };
</script>

<style scoped>
  #wrapper {
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
  }
  #wrapper .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    height: 635.33333px;
    margin: 0px auto;
  }
  #wrapper .contact-form__title {
    text-align: center;
    color: #fff;
  }
  #wrapper .contact-form__label {
    color: #fff;
  }
  .contact-form__button {
    justify-content: space-between;
  }
  .btn {
    width: 49%;
  }
</style>
