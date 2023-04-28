module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true // 新增！！！解决eslint找不到module的报错
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser', // 用来解析.vue后缀文件
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser', // 用来解析vue文件中<script>标签中的代码
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-undef': 'off'
  }
}
