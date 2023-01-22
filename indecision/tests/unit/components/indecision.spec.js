/**
* @vitest-environment happy-dom
*/

import { mount  } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Indecision from '@/components/Indecision.vue'



describe('Indecision Component', ()=>{

    let wrapper
    let clgSpy

    global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            'answer': 'yes',
            'forced': false,
            'image': 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif'
        })
    }))

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

    it('Pruebas en getAnswer', async () =>{

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')
        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.image ).toBe('https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif')
        expect( wrapper.vm.answer ).toBe('Sí!')

    })

    it('Pruebas en getAnswer - Fallo en el API', async () =>{

        fetch.mockImplementationOnce(() => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')
    })

})
