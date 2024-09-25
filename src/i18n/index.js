// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
    en: {
        home: 'Home',
        service: 'Service',
        courses: 'Courses',
        team: 'Team',
        register: 'Register',
        currency: 'currency',
        our_service: 'our services',
        about_us:'about us',
        we_are:'we are',
        finexo:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.',
        why_choose_us:'why choose us',
    },
    khm: {
        home: 'ទំព័រដើម',
        service: 'សេវាកម្ម',
        courses: 'វគ្គសិក្សា',
        team: 'ក្រុម',
        register: 'ចុះឈ្មោះ',
        currency: 'រូបបិយបណ្ណ',
        our_service:'សេវាកម្មរបស់យើង',
        about_us:'អំពីយើង',
        we_are:'យើងគឺជា',
        finexo:'មានបំរែបំរួលជាច្រើននៃវគ្គនៃ Lorem Ipsum ដែលអាចប្រើបាន ប៉ុន្តែភាគច្រើនបានទទួលរងការកែប្រែក្នុងទម្រង់ខ្លះ ដោយការលេងសើច ឬពាក្យចៃដន្យដែលមើលទៅមិនគួរឱ្យជឿសូម្បីតែបន្តិច។ ប្រសិនបើអ្នកនឹងប្រើអត្ថបទរបស់ Lorem Ipsum អ្នកត្រូវតែប្រាកដថាមិនមានអ្វីដែលគួរឱ្យអាម៉ាស់លាក់នៅកណ្តាលអត្ថបទនោះទេ។ ទាំងអស់។',
        why_choose_us:'ហេតុអ្វីជ្រើសរើសយើង'
    },
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n