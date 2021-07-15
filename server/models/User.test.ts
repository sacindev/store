import { User } from './User';

describe('check if password is correct', () => {
    test('return boolean', async() => {
       await User.findOne({_id: "60eb392717703f1c08fdf24a"}, (error, user) => {
            expect(user.decryptPassword("hola")).toEqual(false);
        });
    });
});
