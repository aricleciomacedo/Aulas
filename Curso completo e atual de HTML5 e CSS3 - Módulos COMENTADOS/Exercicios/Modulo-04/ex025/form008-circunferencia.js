function c_area():
    diametro = float(input(''>''))
    pi = 3.14159
    comprimento = (2*pi)*diametro/2
    input ('A circunferência é: {:.1f}Cm' .format(comprimento))
    c_area()
c_area()