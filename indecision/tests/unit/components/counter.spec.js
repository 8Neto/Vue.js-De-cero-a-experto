/**
* @vitest-environment happy-dom
*/

import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Counter from '@/components/Counter.vue'


describe('Counter Component', ()=>{
    // it('debe de hacer match con el snapshot', () =>{

    //     const wrapper = mount( Counter )

    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    it('debe de tener el valor por defeto', () =>{
        const wrapper = mount(Counter)

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2')?.text()

        expect(h2Value).toBe('Counter')
    })

    it('el valor por defecto debe ser 100 en el p', () =>{
        const wrapper = mount(Counter)

        // const pTags = wrapper.findAll('p')

        // const pValue = pTags[1].text()

        const pValue = wrapper.find('[data-test-id="counter"]').text()

        expect(pValue).toBe('100')
    })
})
