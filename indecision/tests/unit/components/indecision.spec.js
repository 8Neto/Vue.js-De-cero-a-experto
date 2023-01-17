/**
* @vitest-environment happy-dom
*/

import { mount  } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Indecision from '@/components/Indecision.vue'



describe('Indecision Component', ()=>{

    let wrapper
    let clgSpy

    beforeEach(()=>{
        wrapper = mount(Indecision)

        clgSpy = vi.spyOn(console, 'log')

    })

    it('debe de hacer match con el snapshot', () =>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('Escribir en el input no debe disparar nada (console.log)', async () =>{
        const getAnswerSpy = vi.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')

        await input.setValue('Hola Mundo')


        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).not.toHaveBeenCalled()
    })

    it('Escribir en "?" debe disparar el getAnswer', async () =>{

        const getAnswerSpy = vi.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')

        await input.setValue('Hola mundo?')

        expect( getAnswerSpy ).toHaveBeenCalledTimes(1)
    })

    it('Pruebas en getAnswer', () =>{
        // expect().toMatchSnapshot()
    })

    it('Pruebas en getAnswer - Fallo en el API', () =>{
        // expect().toMatchSnapshot()
    })

})
