<template>
    <main id="main">
        <div class="container mt-5">
            <h1 class="text-white my-4 fw-bold text-green-800 theme-color">Website's Design</h1>
            <p>This website was made with <span style="color: var(--rad);">❤️</span>. <br>I have mentioned all the languages and tools that I used to create this website on this page. The theme colors of this website are also listed.</p>
            <hr class="bg-light" />
        </div>
        <img src="../assets/img/home/about-shape-3.svg" loading="lazy" alt="" class="shape shape-3">
        <div class="content p-5">
            <div class="row">
                <h4 class="scroll-m-32 text-white">Inspiration</h4>
                <p class="mb-5">
                    For this website Special thanks to 
                    <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://honghong.me/">Hong</a> and
                    <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://theodorusclarence.com/">Theodorus</a>
                    for their inspiring portfolio designs. Their work greatly influenced my own creation. While I made significant customizations, 
                    their designs were a fantastic starting point.
                </p>
            </div>
            <div class="row">
                <h4 class="scroll-m-32 text-white text-decoration-none">Tech Stack</h4>
                <div class="tech-stack">
                    <div class="tech">
                        <img src="https://skillicons.dev/icons?i=html" alt="HTML"/>
                        <div class="tooltip"><span class="tech-name">HTML:</span> The standard markup language for creating web pages.</div>
                    </div>
                    <div class="tech">
                        <img src="https://skillicons.dev/icons?i=css" alt="CSS"/>
                        <div class="tooltip"><span class="tech-name">CSS:</span> A style sheet language used for describing the presentation of a document written in HTML.</div>
                    </div>
                    <div class="tech">
                        <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js"/>
                        <div class="tooltip"><span class="tech-name">Node.js:</span> A JavaScript runtime built on Chrome's V8 JavaScript engine.</div>
                    </div>
                    <div class="tech">
                        <img src="https://skillicons.dev/icons?i=vue" alt="Vue.js"/>
                        <div class="tooltip"><span class="tech-name">Vue.js:</span> A progressive framework for building user interfaces.</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h4 class="scroll-m-32 text-white text-decoration-none mt-5">Color Palette</h4>
                <div class="row">
                    <div data-fade="2" class="mt-8 rounded p-4 border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <div class="flex items-end justify-between">
                            <h2 class="capitalize">Dark Mode</h2>
                            <button class="rounded-md p-2 focus:outline-none md:p-2.5 border dark:border-gray-600 hover:border-primary-300 hover:text-primary-300 dark:hover:border-primary-300 dark:hover:text-primary-300 focus-visible:border-primary-300 focus-visible:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 text-lg md:text-xl">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </button>
                        </div>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Font Family: Inter</p>
                        <div class="grid sm:grid-cols-2">
                            <div class="mt-4 flex items-center gap-2">
                                <div class="h-20 w-20 rounded shadow-sm dark:shadow-none border border-gray-300 dark:border-gray-600 shrink-0 bg-white"></div>
                                <div class="flex-col">
                                    <p class="color-name">White Background</p>
                                    <p class="color-code">#ffffff</p>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center gap-2">
                                <div class="h-20 w-20 rounded shadow-sm dark:shadow-none border border-gray-300 dark:border-gray-600 shrink-0 bg-dark"></div>
                                <div class="flex-col">
                                    <p class="color-name">Dark Background</p>
                                    <p class="color-code">#0e1111</p>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center gap-2">
                                <div class="h-20 w-20 rounded shadow-sm dark:shadow-none border border-gray-300 dark:border-gray-600 shrink-0 bg-primary-200"></div>
                                <div class="flex-col">
                                    <p class="color-name">Primary 200</p>
                                    <p class="color-code">#dbff00</p>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center gap-2">
                                <div class="h-20 w-20 rounded shadow-sm dark:shadow-none border border-gray-300 dark:border-gray-600 shrink-0 bg-primary-300"></div>
                                <div class="flex-col">
                                    <p class="color-name">Primary 300</p>
                                    <p class="color-code">#00e887</p>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center gap-2">
                                <div class="h-20 w-20 rounded shadow-sm dark:shadow-none border border-gray-300 dark:border-gray-600 shrink-0 bg-primary-400"></div>
                                <div class="flex-col">
                                    <p class="color-name">Primary 400</p>
                                    <p class="color-code">#00e0f3</p>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center gap-2">
                                <div class="h-20 w-20 rounded shadow-sm dark:shadow-none border border-gray-300 dark:border-gray-600 shrink-0 bg-primary-500"></div>
                                <div class="flex-col">
                                    <p class="color-name">Primary 500</p>
                                    <p class="color-code">#00bfff</p>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center gap-2">
                                <div class="h-20 w-20 rounded shadow-sm dark:shadow-none border border-gray-300 dark:border-gray-600 shrink-0 bg-gradient-to-tr from-primary-300 to-primary-500"></div>
                                <div class="flex-col">
                                    <p class="color-name">Gradient</p>
                                    <p class="color-code">#00e0f3 to #00bfff</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
.mt-8 {
    margin-top: 2rem;
}
.rounded {
    border-radius: 0.375rem;
}
.p-4 {
    padding: 1rem;
}
.color-name {
    color: var(--white);
    font-size: 20px;
    font-weight: 600;
    display: block;
}
.color-code {
    color: var(--text);
    margin-top: -10px;
    display: block;
}
.border-2 {
    border-width: 2px;
}
.border-dashed {
    border-style: dashed;
}
.border-gray-300 {
    border-color: #d1d5db;
}
.dark\:border-gray-600 {
    border-color: #718096;
}
.capitalize {
    color: var(--white);
    text-transform: capitalize;
}
.flex {
    display: flex;
}
.items-end {
    align-items: flex-end;
}
.justify-between {
    justify-content: space-between;
}
.rounded-md {
    border-radius: 0.375rem;
}
.p-2 {
    padding: 0.5rem;
}
.md\:p-2.5 {
    padding: 0.625rem;
}
.focus\:outline-none {
    outline: none;
}
.border {
    border-width: 1px;
}
.hover\:border-primary-300:hover, .hover\:text-primary-300:hover {
    border-color: #00e887;
    color: #00e887;
}
.dark:hover\:border-primary-300:hover, .dark:hover\:text-primary-300:hover {
    border-color: #00e887;
    color: #00e887;
}
.focus-visible\:border-primary-300:focus-visible, .focus-visible\:text-primary-300:focus-visible {
    border-color: #00e887;
    color: #00e887;
}
.dark:focus-visible\:border-primary-300:focus-visible, .dark:focus-visible\:text-primary-300:focus-visible {
    border-color: #00e887;
    color: #00e887;
}
.text-lg {
    font-size: 1.125rem;
}
.md\:text-xl {
    font-size: 1.25rem;
}
.text-sm {
    font-size: 0.875rem;
}
.text-gray-600 {
    color: #4b5563;
}
.dark\:text-gray-300 {
    color: #cbd5e0;
}
.grid {
    display: grid;
}
.sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
.gap-2 {
    gap: 0.5rem;
}
.h-20 {
    height: 3.9rem;
}
.w-20 {
    width: 3.9rem;
}
.shadow-sm {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.dark\:shadow-none {
    box-shadow: none;
}
.bg-white {
    background-color: var(--white); /* Use variables here */
}
.bg-dark {
    background-color: var(--blackly);
}
.bg-primary-200 {
    background-color: var(--theme);
}
.bg-primary-300 {
    background-color: var(--text);
}
.bg-primary-400 {
    background-color: var(--border);
}
.bg-primary-500 {
    background-color: var(--color-bg);
}
.from-primary-300 {
    background-image: linear-gradient(to top right, var(--text), var(--border));
}
.to-primary-500 {
    background-image: linear-gradient(to top right, var(--color-bg), var(--border));
}
</style>
