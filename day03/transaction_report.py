# read the telebirr transacition, summarize them by customer
# missing files handle

# line by line read
# dictionary 

tx_report = {}


try:
    with open('./day03/transaction.txt' , 'r') as tx_file:
        for line in tx_file:
            line = line.strip()
            parts = line.split(',')
            # keep a var to tell it is key or val
            isVal = False
            key = ''
            val = 0

            for part in parts:
                # print(type(part))
                items = part.split(':')
                # print(items)
                # print(len(items))
                item = items[1]
                # in the first iteration item - key
                # in the second item - val
                if isVal:
                    # then key has already been defined
                    if key in tx_report:
                        tx_report[key] += int(item)
                    else:
                        tx_report[key] = int(item)
                    isVal = False
                else:
                    key = item.strip()
                    isVal = True # setting it up for the next
except FileNotFoundError:
    print("File doesn't exist")
else:
    # print the report in sorted manner
    # switch up the key and values and sort that

    reverse_key_val = {}
    for key,val in tx_report.items():
        if val in reverse_key_val:
            reverse_key_val[val].append(key)
        else:
            reverse_key_val[val] = [key]

    listed_keys = list(reverse_key_val.keys())
    listed_keys.sort()

    # loop according to the values and print the report accordingly
    for total_spent in listed_keys:
        for i in reverse_key_val[total_spent]:
            with open('./day03/report.txt' , 'a') as report_file:
                report_file.write(f"{i} -> {total_spent}\n")

    
finally:
    print("operation done")

    