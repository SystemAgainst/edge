<script setup>
import {computed, ref} from "vue";

import AppInput from "../components/UI/AppInput.vue";

import {useForm, useField} from "vee-validate";

import required from "../utils/requiredValidation.js";
import { minLength, maxLength } from "../utils/lengthValidation.js";
import emailValidation from "../utils/emailValidation.js";
import phoneValidation from "../utils/phoneValidation.js";

const validationSchema = {
  userName: (value) => {
    const req = required(value)
    if (req !== true)
      return req;

    const min = minLength(2, value);

    if (min !== true)
      return min;

    return true;
  },

  surname: (value) => {
    const min = minLength(2, value);

    if (min !== true)
      return min;

    return true;
  },

  email: (value) => {
    return emailValidation(value);
  },

  tel: (value) => {
    return phoneValidation(value);

  },

  msg: (value) => {
    const min = minLength(5, value)
    if (min !== true)
      return min;

    const max = maxLength(500, value)
    if (max !== true)
      return max;

    return true;
  },
};

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    errors: {}
  }
});

const { value: userName, errorMessage: userNameError } = useField('userName');
const { value: surname, errorMessage: surnameError } = useField('surname');
const { value: email, errorMessage: emailError } = useField('email');
const { value: tel, errorMessage: telError } = useField('tel');
const { value: msg, errorMessage: msgError } = useField('msg');

const agreement = ref(true);

const submitForm = handleSubmit((values, actions) => {
  try {
    alert(`${values} - OK`);
    // actions.resetForm();
  } catch (e) {
    console.warn(e);
  }
});

const hasErrors = computed(() => {
  return Object.keys(errors.value).length > 0;
});

</script>

<template>
  <div>
    <div class="wrapper">
      <div class="form">
        <form action="#" id="form" class="form__body" @submit.prevent="submitForm()">
          <h1 class="form__title">
            Форма обратной связи
          </h1>

          <app-input
              type="text"
              :placeholder="'Введите имя'"
              :error="userNameError"
              :label="'Имя*'"
              v-model="userName"
          />

          <app-input
              type="text"
              :placeholder="'Введите фамилию'"
              :label="'Фамилия'"
              v-model="surname"
              :error="surnameError"
          />

          <app-input
              type="email"
              :placeholder="'Введите почту'"
              :error="emailError"
              :label="'Почта*'"
              v-model="email"
          />

          <div class="form__item">
            <label for="formTel" class="form__label">Телефон*:</label>
            <input
                id="formTel"
                name="tel"
                type="tel"
                class="form__input"
                placeholder="Введите телефон"
                v-model="tel"
            >
            <span v-if="telError">{{ telError }}</span>
          </div>

          <div class="form__item">
            <label for="formMsg" class="form__label">Сообщение:</label>
            <textarea
                id="formMsg"
                name="msg"
                class="form__input"
                placeholder="Введите сообщение"
                v-model="msg"
            />
            <span v-if="msgError" class="form__input _error">{{ msgError }}</span>
          </div>

          <div class="form__item">
            <div class="checkbox">
              <input
                  id="formAgreement"
                  name="agreement"
                  checked
                  type="checkbox"
                  class="checkbox__input"
                  v-model="agreement"
              >
              <label for="formAgreement" class="checkbox__label"><span>Я даю свое согласие на обработку персональных данных</span></label>
            </div>
            <!-- /.form__checkbox -->
          </div>

          <button type="submit" class="form__btn" :disabled="hasErrors && !agreement">Отправить</button>
        </form>
        <!-- /#form.form__body -->
      </div>
      <!-- /.form -->
    </div>
    <!-- /.wrapper -->
  </div>
</template>

<style scoped lang="scss">
.invalid-warning {
  margin: 10px auto;
  color: red;
}
</style>
