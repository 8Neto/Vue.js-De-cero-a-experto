/**
* @vitest-environment happy-dom
*/

import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Counter from '@/components/Counter.vue'


describe('Counter Component', ()=>{

    let wrapper

    beforeEach(()=>{
        wrapper = mount(Counter)
    })
    // it('debe de hacer match con el snapshot', () =>{

    //     const wrapper = mount( Counter )

    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    it('debe de tener el valor por defeto', () =>{

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2')?.text()

        expect(h2Value).toBe('Counter')
    })

    it('el valor por defecto debe ser 100 en el p', () =>{

        // const pTags = wrapper.findAll('p')

        // const pValue = pTags[1].text()

        const pValue = wrapper.find('[data-test-id="counter"]').text()

        expect(pValue).toBe('100')
    })

    it('Debe de incrementar y reducir el valor del contador', async () =>{

        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')


        const value = wrapper.find('[data-test-id="counter"]').text()

        expect(value).toBe('101')
    })

    it('Debe de establecer el valor por defecto', async () =>{

        // const { start } = wrapper.props()
        const start = wrapper.props('start')

        const value = wrapper.find('[data-test-id="counter"]').text()

        expect(start).toBe(Number(value))
    })

    it('Debe de mostrar el valor title', async () =>{

        const title = 'Hola Mundo'

        const wrapper = mount(Counter, {
            props: {
                title
            }
        })

        const counterTitle = wrapper.find('h2').text()

        expect(counterTitle).toBe(title)
    })
})
