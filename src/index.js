const compnayName = document.querySelector("#companyName")
const compnayState = document.querySelector("#compnayState")
const compnayEmployee = document.querySelector("#compnayEmployee")

const companyListEl = document.querySelector("#company-list")


let companies = []
class Company {

  // access modifier => public, private , protected 
  async getAll() {
    try {
      const response = await fetch('http://localhost:3004/data')
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

  create(data) {

  }

  update(data) {

  }

  delete(data) {

  }
}


class Render {
    build(toRender) {
      let result = ''
      toRender.forEach(({ name, state, employees }) => {
        result += `
        <div
        class="grid grid-cols-[1fr_1fr_1fr_75px] place-items-start text-xs text-[#5A6474] dark:text-[#656565] px-5 py-4 group border-l border-l-transparent hover:border-l-slate-300 odd:bg-[#f8f8f8] dark:odd:bg-[#20242b]"
      >
        <div class="font-semibold">${name}</div>
        <div class="font-semibold">${state}</div>
        <div class="font-semibold">${employees}</div>
        <div
          class="flex items-center gap-4 font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <button class="w-4 cursor-pointer">
            <svg
              width="94"
              height="92"
              viewBox="0 0 94 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-full"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M63.7058 11.7658C64.9289 10.5269 65.6674 9.78877 66.223 9.31564C66.7733 9.79471 67.5039 10.5408 68.7136 11.7927L81.4343 24.9581C82.5934 26.1578 83.2795 26.8775 83.718 27.4159C83.2737 27.9496 82.5799 28.662 81.408 29.8491L72.0333 39.345L54.1419 21.4536L63.7058 11.7658ZM47.8188 27.8584L11.9507 64.1907C11.6856 64.4592 11.4826 64.665 11.3095 64.8452C11.197 64.9624 11.1124 65.0529 11.0477 65.1245C11.0371 65.2204 11.0256 65.3438 11.0127 65.5057C10.9929 65.7548 10.9738 66.0432 10.949 66.4198L9.91782 82.0878L29.2338 81.3494C29.6337 81.3342 29.9404 81.3223 30.2053 81.3084C30.3776 81.2993 30.509 81.2905 30.6113 81.2818C30.6867 81.2122 30.7819 81.1212 30.9049 81.0002C31.0939 80.8141 31.3096 80.5957 31.5908 80.3109L65.7103 45.7499L47.8188 27.8584ZM66.273 0.000110626C64.025 -0.0119727 62.3001 0.963178 61.0113 1.95722C59.8783 2.83111 58.6755 4.05009 57.4684 5.27341L57.4683 5.27343L57.3011 5.4429L5.54598 57.8678C5.47638 57.9383 5.40354 58.0114 5.32809 58.0871C4.53 58.8879 3.43884 59.9827 2.79485 61.4158C2.15085 62.8488 2.05664 64.3917 1.98774 65.5202L1.98773 65.5204C1.98122 65.627 1.97494 65.7299 1.96844 65.8287L0.755049 84.2651L0.748085 84.3686C0.720519 84.7746 0.673708 85.464 0.719471 86.0914C0.778791 86.9046 1.02824 88.3355 2.22808 89.5688C3.42791 90.8021 4.85144 91.0908 5.66269 91.1725C6.28842 91.2355 6.97877 91.2077 7.38539 91.1913H7.38552L7.48929 91.1872L29.5775 90.3429C29.6825 90.3389 29.792 90.3352 29.9054 90.3315C31.1024 90.2917 32.7406 90.2373 34.2618 89.5671C35.783 88.8968 36.9287 87.7246 37.7659 86.8681L37.7659 86.868C37.8452 86.7869 37.9217 86.7086 37.9956 86.6338L87.8127 36.172L87.9746 36.008C89.1298 34.8385 90.2872 33.6666 91.1201 32.5632C92.0705 31.304 92.9966 29.634 93.0083 27.4659C93.0199 25.2977 92.1118 23.6178 91.175 22.3486C90.3541 21.2363 89.2093 20.052 88.0668 18.8702L88.0667 18.8701L87.9066 18.7044L75.1859 5.53903L75.0205 5.36777C73.8266 4.13154 72.6369 2.89969 71.5134 2.01367C70.2354 1.00583 68.5211 0.0121939 66.273 0.000110626Z"
                fill="#727D8A"
              />
            </svg>
          </button>
          <button class="w-4 cursor-pointer">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-full"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.25 9C25.25 7.34315 26.5931 6 28.25 6H34.75C36.4069 6 37.75 7.34315 37.75 9V13.25H25.25V9ZM19.25 13.25V9C19.25 4.02944 23.2794 0 28.25 0H34.75C39.7206 0 43.75 4.02944 43.75 9V13.25H58.75C60.2688 13.25 61.5 14.4812 61.5 16C61.5 17.5188 60.2688 18.75 58.75 18.75H55.75V53C55.75 57.9706 51.7206 62 46.75 62H16.25C11.2794 62 7.25 57.9706 7.25 53V18.75H2.75C1.23122 18.75 0 17.5188 0 16C0 14.4812 1.23122 13.25 2.75 13.25H19.25ZM13.25 20V53C13.25 54.6569 14.5931 56 16.25 56H46.75C48.4069 56 49.75 54.6569 49.75 53V20H13.25ZM41 48C39.6193 48 38.5 46.8807 38.5 45.5V32.5C38.5 31.1193 39.6193 30 41 30C42.3807 30 43.5 31.1193 43.5 32.5V45.5C43.5 46.8807 42.3807 48 41 48ZM20 45.5C20 46.8807 21.1193 48 22.5 48C23.8807 48 25 46.8807 25 45.5V32.5C25 31.1193 23.8807 30 22.5 30C21.1193 30 20 31.1193 20 32.5V45.5Z"
                fill="#737D8B"
              />
            </svg>
          </button>
        </div>
      </div>
        
        `
      })
  
      companyListEl.innerHTML = result
    }
}


// intialize 
  document.addEventListener('DOMContentLoaded', async () => {

    const company = new Company()
    const render = new Render()
    try {
      const companyList = await company.getAll()
      render.build(companyList)
    } catch (error) { }
    // company.getAll().then(companyList => {
    //   render.build(companyList)
    // }).catch(error => {
    //   console.log("error", error)
    // })
  
  })