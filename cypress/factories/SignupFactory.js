var faker = require('faker')
var cpf = require('gerador-validador-cpf')
faker.locale ='pt_BR'
export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
       

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: faker.phone.phoneNumber(),
            address: {
                postalcode: '84010560',
                street:'Rua Frederico Bahls',
                number: '500',
                details: 'Ap 32',
                district: 'Centro',
                city_state: 'Ponta Grossa/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'    
        }

        return data
    }
}