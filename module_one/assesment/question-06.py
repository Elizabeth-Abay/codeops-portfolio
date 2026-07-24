# takes in the number of seconds
# second -> minute -> hour
#  1 hr = 3600 sec
# else remainder = divide by 60 until


def digitalClock(seconds):
    # Standard day length in seconds (24 * 60 * 60)
    SECONDS_IN_A_DAY = 86400

    # Handle rollover past 24 hours (86400 seconds)
    seconds = seconds % SECONDS_IN_A_DAY

    # Extract hours, minutes, and remaining seconds
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    remaining_seconds = seconds % 60

    # Format into two-digit HH:MM:SS format
    return f"{hours:02d}:{minutes:02d}:{remaining_seconds:02d}"


# --- Test Examples ---
print(digitalClock(5025))  # Output: "01:23:45"
print(digitalClock(61201))  # Output: "17:00:01"
print(digitalClock(87000))  # Output: "00:10:00"