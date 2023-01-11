/**
* @vitest-environment happy-dom
*/

import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Counter from '@/components/Counter.vue'


describe('Counter Component', ()=>{
    it('debe de hacer match con el snapshot', () =>{

        const wrapper = mount( Counter )

        expect(wrapper.html()).toMatchSnapshot()
    })
})
