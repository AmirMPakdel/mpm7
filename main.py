
x = input("enter x : ")

x = int(x)

y = input("enter y : ")

y = int(y)

temp_x = x

temp_y = y

print("\nenter 'quit' to exit. \n")

while True:

    side = input("type a side name(top-right, top-left, bot-right, bot-left) : ")

    if side == "quit":

        break

    elif side == "top-right":

        temp_x = abs(temp_x)

        temp_y = abs(temp_y)

    elif side == "top-left":

        temp_x = -abs(temp_x)

        temp_y = abs(temp_y)

    elif side == "bot-right":

        temp_x = abs(temp_x)

        temp_y = -abs(temp_y)

    elif side == "bot-left":

        temp_x = -abs(temp_x)

        temp_y = -abs(temp_y)

    else :

        print("invalid side name. enter one of top-right, top-left, bot-right, bot-left sides. \n")

        continue

    print("\nin "+side+" side ---> x = "+str(temp_x)+",  y = "+str(temp_y)+"\n")

    temp_x = x

    temp_y = y




