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
})
