# Complete the catAndMouse function below.
def catAndMouse(x, y, z):
    dist_a = abs(x - z) #2
    dist_b = abs(y - z) #1
    if dist_a < dist_b:
        return "Cat A"
    elif dist_b < dist_a:
        return "Cat B"
    else:
        return "Mouse C"


print(catAndMouse(1, 2, 3))