def getMoneySpent(keyboards, drives, b):
    max_cost = -1

    for i in keyboards:
        for j in drives:
            sum = i + j
            if sum > max_cost and sum <= b:
                max_cost = sum
    return max_cost



keyboards = [40, 50, 60]
drives = [8, 12, 20]
b = 60 

print(getMoneySpent(keyboards, drives, b))  # Esperado: 58
