import calendar
import datetime

from twilio.rest import Client


def days_until_end_month():
    d = datetime.date.today()
    end_of_month = datetime.date(d.year, d.month, calendar.monthrange(d.year, d.month)[-1])
    end = str(end_of_month).split('-')
    current = str(d).split('-')
    return int(end[2]) - int(current[2])


def send_message(sid='AC0d6981533b67f97c77c927c421d50ae3', auth_token='8f4e7dee0668864fdb32b41075ce815d',
                 phone_number=None, name=None):
    client = Client(sid, auth_token)

    message = client.messages.create(
        body=f'Hello "PIKE SPRING 2022 LIVE-IN" your first month of rent is due by New Years. Please pay on '
             f'time - '
             f'we need money for Rush and not getting kicked out of the house.\nPlease pay. Pay now. Pay.',
        from_='+14155490279',
        to=phone_number
    )

    print(f'Sent to: {name} | [{message.sid}]')


def main(spreadsheet='August Rent - Sheet1.csv'):
    with open(spreadsheet, 'r') as tenants:
        for num, tenant in enumerate(tenants):
            tenant_info = tenant.split(',')
            if tenant_info[2] == 'FALSE':
                send_message(name=tenant_info[0], phone_number=tenant_info[3])


main()
# send_message(phone_number='+19544949167', name='jack')